import React from 'react';
import packageJson from '../package.json';

global.appVersion = packageJson.version;

// version from response - first param, local version second param
const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA.split(/\./g);

  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) { continue; }
    return a > b || Number.isNaN(b);
  }
  return false;
};

class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isLatestVersion: false,
      refreshCacheAndReload: () => {
        
        if (window.caches) {
          // Service worker cache should be cleared with caches.delete()
          window.caches.keys().then( (names) => {
            names.forEach(name => {
              window.caches.delete(name);
            });

          });
        }
        // delete browser cache and hard reload
        window.location.reload(true);
      }
    };
  }

  componentDidMount() {
    fetch(`${window.location.origin}/meta.json?${new Date().getTime()}`, { cache: 'no-cache' })
      .then((response) => response.json())
      .catch((err) => {
        this.setState({ loading: false, isLatestVersion: true });
        console.info(`File not exists meta.json - ${err}`);
      })
      .then((meta) => {
        const latestVersion = meta.version;
        const currentVersion = global.appVersion;

        const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
        if (shouldForceRefresh) {
          console.info(`We have a new version - ${latestVersion}. Should force refresh`);
          this.setState({ loading: false, isLatestVersion: false });
        } else {
          console.info(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
          this.setState({ loading: false, isLatestVersion: true });
        }
      }).catch((error) => {
        console.info(`File not exists meta.json - ${error}`);
      });
  }

  render() {
    const { loading, isLatestVersion, refreshCacheAndReload } = this.state;
    const { children } =  this.props;    
    return children({ loading, isLatestVersion, refreshCacheAndReload});
  }
}

export default CacheBuster;

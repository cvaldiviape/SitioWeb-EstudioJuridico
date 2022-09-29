
export const EMPTY_GUID = '00000000-0000-0000-0000-000000000000';
export const ZERO = 0;
export const initialState = {

    SignalRReducers: {
        // Holding a reference to the signalR object
        signalR: null,

        // This is here for sessionStorage reasons
        webSessionGuid: null,

        // This is here to correlate FindMember and MemberList
        searchRequestId: null,

        // This is the member that we have called SelectMember with
        //  which will start off the influx of TripLists and TripStatuses 
        //  from the server
        selectedMemberId: EMPTY_GUID,

        // The track trip and trip list screens need the members name, however
        //  the messages related to those screens don't have that data.  The 
        //  MemberAdminProfile message does so we'll extract the name from there
        //  and store it here
        selectedMemberName: null,

        // This is the PII information of a single member.  It's existence is extremely
        //  short lived.
        memberPII: null,

        // This is the most up to date version of the trip list that we received
        //  from the server.
        latestTripList: null,

        // This is a dictionary of the most up to date version of the trip status
        //  objects.  We have a dictionary instead of a single object as we can
        //  have more than one trip guid represented for a single member
        latestTripStatuses: {},

    }
}

const smStates = {
    INITSTATE: "InitState",
    STARTUPSTATE: "StartupState",
    RESERVEVMSTATE: "ReserveVMState",
    WAITFORRESERVATIONREADYSTATE: "WaitForReservationReadyState",
    RESERVATIONPOLLSTATE: "ReservationPollState",
    RESERVEVMFAILEDSTATE: "ReserveVMFailedState",
    RETRYRESERVEVMSTATE: "RetryReserveVMState",
    TERMINATEDURINGRESERVATIONSTATE: "TerminateDuringReservationState",
    STARTVMSTATE: "StartVMState",
    WAITFORVMTOSTARTSTATE: "WaitForVMToStartState",
    RETRYVMCREATIONSTATE: "RetryVMCreationState",
    VMSTARTFAILEDSTATE: "VMStartFailedState",
    WAITFORVMMGRBEFORETERMINATESTATE: "WaitForVMMgrBeforeTerminateState",
    WAITFORSTARTTOTERMINATESTATE: "WaitForStartToTerminateState",
    TERMINATEDURINGVMSTARTUPSTATE: "TerminateDuringVMStartupState",
    WAITFORVMPUBSUBSETUPSTATE: "WaitForVMPubSubSetupState",
    VMPUBSUBSETUPFAILEDSTATE: "VMPubSubSetupFailedState",
    VMRUNNINGSTATE: "VMRunningState",
    TIMEOUTSIGNALEDSTATE: "TimeoutSignaledState",
    VMSHUTTINGDOWNSTATE: "VMShuttingDownState",
    TERMINATEREQUESTEDSTATE: "TerminateRequestedState",
    ABORTREQUESTEDSTATE: "AbortRequestedState",
    ABORTVMSHUTTINGDOWNSTATE: "AbortVMShuttingDownState",
    BALANCEZEROABORTVMSSTATE: "BalanceZeroAbortVMsState",
    BALANCEZEROWAITFORVMABORTSTATE: "BalanceZeroWaitForVMAbortState",
    BALANCEZEROVMSHUTTINGDOWNSTATE: "BalanceZeroVMShuttingDownState",
    BALANCEZEROABORTFAILEDSTATE: "BalanceZeroAbortFailedState",
    BALANCEZEROABORTFAILEDVMSHUTTINGDOWNSTATE: "BalanceZeroAbortFailedVMShuttingDownState",
    EXPCONFFAILWAITFORVMSHUTDOWNSTATE: "ExpConfFailWaitForVMShutDownState",
    EXPCONFFAILVMSHUTTINGDOWNSTATE: "ExpConfFailVMShuttingDownState",
    EXPERIMENTCONFIGURATIONFAILURESTATE: "ExperimentConfigurationFailureState",
    POSTPROCESSSTATE: "PostProcessState",
    WATCHDOGUPDATESTATE: "WatchDogUpdateState",
    WATCHDOGFAILEDSTATE: "WatchDogFailedState",
    COMPLETEDSTATE: "CompletedState",
    ABORTEDSTATE: "AbortedState",
    TERMINATEDSTATE: "TerminatedState",
    TIMEDOUTSTATE: "TimedoutState",
    SHUTTINGDOWNTERMINATEDSTATE: "ShuttingDownTerminatedState",
    VMTERMINATIONREQUESTFAILEDSTATE: "VMTerminationRequestFailedState",
    BALANCEZEROTERMINATEDSTATE: "BalanceZeroTerminatedState",
    BALANCEZEROABORTEDSTATE: "BalanceZeroAbortedState",
    RESOURCEUNAVAILABLESTATE: "ResourceUnavailableState",
    SIMULATIONCRASHEDSTATE: "SimulationCrashedState",
    FAILEDSTATE: "FailedState",
    LICENSESERVERNOTFOUNDSTATE: "LicenseServerNotFoundState",
    ENDSTATE: "EndState",
  };
  const smStatesWithUpdatingState = { ...smStates, UPDATINGSTATE: "UpdatingState" };
  
  // only on frontend
  const frontendStates = {
    // request state is used to display a spinner notifying user of a request, to block additional run request
    REQUESTSTATE: "RequestState",
    // if the case created does not have the input file uploaded
    WAITINGFORINPUTFILE: "WaitingForInputFileState",
    // open state is when the case has been created
    OPENSTATE: "OpenState",
    // upload state is used to display uploading  state and block actions during uploads
    UPLOADSTATE: "UploadState",
    // initial state is used in redux selector when nothing is yet present in state for such caseId, hence loading spinner is shown
    INITIALSTATE: "InitialState",
  };
  
  const endStates = [
    smStates.COMPLETEDSTATE,
    smStates.ABORTEDSTATE,
    smStates.TERMINATEDSTATE,
    smStates.TIMEDOUTSTATE,
    smStates.BALANCEZEROABORTEDSTATE,
    smStates.BALANCEZEROTERMINATEDSTATE,
    smStates.FAILEDSTATE,
    smStates.RESOURCEUNAVAILABLESTATE,
    smStates.LICENSESERVERNOTFOUNDSTATE,
    smStates.EXPERIMENTCONFIGURATIONFAILURESTATE,
    smStates.SIMULATIONCRASHEDSTATE,
  ];
  
  const allowedDeleteStates = [...endStates, frontendStates.OPENSTATE];
  
  module.exports = {
    smStates,
    frontendStates,
    endStates,
    allowedDeleteStates,
    smStatesWithUpdatingState,
    ...smStates,
    ...frontendStates,
    ...endStates,
  };
  
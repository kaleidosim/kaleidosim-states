import { frontendStates, smStates, smStatesWithUpdatingState } from "./states";

/**
 * You should add any states in here that the user can expect to see on the API when calling:
 * /projectRun/caseStatus/{projectId} endpoint.
 */
export const API_STATES_MAP = {
  OPENSTATE: "Open",
  STARTVMSTATE: "StartVM",
  VMRUNNINGSTATE: "VMRunning",
  TERMINATEREQUESTEDSTATE: "TerminateRequested",
  ABORTREQUESTEDSTATE: "AbortRequested",
  BALANCEZEROABORTFAILEDSTATE: "BalanceZeroAbortFailed",
  COMPLETEDSTATE: "Completed",
  ABORTEDSTATE: "Aborted",
  TERMINATEDSTATE: "Terminated",
  BALANCEZEROTERMINATEDSTATE: "BalanceZeroTerminated",
  BALANCEZEROABORTEDSTATE: "BalanceZeroAborted",
  RESOURCEUNAVAILABLESTATE: "ResourceUnavailable",
  SIMULATIONCRASHEDSTATE: "SimulationCrashed",
  FAILEDSTATE: "Failed",
  EXPERIMENTCONFIGURATIONFAILURESTATE: "ExperimentConfigurationFailure",
  LICENSESERVERNOTFOUNDSTATE: "LicenseServerNotFound",
  TIMEOUTSIGNALEDSTATE: "TimeoutSignaled",
  TIMEDOUTSTATE: "Timedout",
  UPDATINGSTATE: "Updating",
};

/**
 * Put a state in one of the categories below so that the specific message is grouped in the mapCaseToCategory
 * in the project-run.service
 *
 * If a state is not mentioned here it will be shown as UPDATINGSTATE.
 *
 */

export const apiRunningCategories = [smStates.VMRUNNINGSTATE, smStates.STARTVMSTATE];
export const apiProccesingCategories = [
  frontendStates.OPENSTATE,
  smStates.TERMINATEREQUESTEDSTATE,
  smStates.TIMEOUTSIGNALEDSTATE,
  smStates.ABORTREQUESTEDSTATE,
  smStatesWithUpdatingState.UPDATINGSTATE,
];
export const apiErrorCategories = [
  smStates.FAILEDSTATE,
  smStates.RESOURCEUNAVAILABLESTATE,
  smStates.SIMULATIONCRASHEDSTATE,
  smStates.LICENSESERVERNOTFOUNDSTATE,
  smStates.EXPERIMENTCONFIGURATIONFAILURESTATE,
  smStates.TIMEDOUTSTATE,
];
export const apiSuccessfulCategories = [smStates.COMPLETEDSTATE];
export const apiTerminatedCategories = [
  smStates.TERMINATEDSTATE,
  smStates.ABORTEDSTATE,
  smStates.BALANCEZEROABORTEDSTATE,
  smStates.BALANCEZEROTERMINATEDSTATE,
];

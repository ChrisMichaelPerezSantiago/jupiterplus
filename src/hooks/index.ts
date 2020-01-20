import { createTypedHooks } from 'easy-peasy';
import GlobalStore from '../interfaces/GlobalStore';

const typedHooks = createTypedHooks<GlobalStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
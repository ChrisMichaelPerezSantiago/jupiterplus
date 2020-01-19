import { createTypedHooks } from 'easy-peasy';
import SerieStore from '../interfaces/Serie/SerieStore';

const typedHooks = createTypedHooks<SerieStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
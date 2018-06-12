import paths, { GET_PATH, SET_PATH } from './paths';

export const PathsNamespace = 'paths';

export const PathsMutationTypes = {
  SET_PATH: `${PathsNamespace}/${SET_PATH}`,
};

export const PathsGetterTypes = {
  GET_VIDEO_ID: `${PathsNamespace}/${GET_PATH}`,
};

export default paths;

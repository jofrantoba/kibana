/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { PolicyDetailsState } from '../../types';
import { createStore, Dispatch, Store } from 'redux';
import { policyDetailsReducer, PolicyDetailsAction } from './index';
import { policyConfig, windowsEventing } from './selectors';
import { clone } from '../../models/policy_details_config';

describe('policy details: ', () => {
  let store: Store<PolicyDetailsState>;
  let getState: typeof store['getState'];
  let dispatch: Dispatch<PolicyDetailsAction>;

  beforeEach(() => {
    store = createStore(policyDetailsReducer);
    getState = store.getState;
    dispatch = store.dispatch;

    dispatch({
      type: 'serverReturnedPolicyDetailsData',
      payload: {
        policyItem: {
          id: '',
          name: '',
          description: '',
          config_id: '',
          enabled: true,
          output_id: '',
          inputs: [],
          namespace: '',
          package: {
            name: '',
            title: '',
            version: '',
          },
          revision: 1,
        },
        policyConfig: {
          windows: {
            malware: {
              mode: 'detect',
            },
            eventing: {
              process: false,
              network: false,
            },
          },
          mac: {
            malware: {
              mode: '',
            },
            eventing: {
              process: false,
              network: false,
            },
          },
          linux: {
            eventing: {
              process: false,
              network: false,
            },
          },
        },
      },
    });
  });

  describe('when the user has enabled windows process eventing', () => {
    beforeEach(() => {
      const config = policyConfig(getState());
      if (!config) {
        throw new Error();
      }

      const newPayload1 = clone(config);
      newPayload1.windows.eventing.process = true;

      dispatch({
        type: 'userChangedPolicyConfig',
        payload: { policyConfig: newPayload1 },
      });
    });

    it('windows process eventing is enabled', async () => {
      expect(windowsEventing(getState())!.process).toEqual(true);
    });
  });
});

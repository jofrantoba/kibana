/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { SortFieldCase } from '../../../../../containers/case/types';
import { UseGetCasesState } from '../../../../../containers/case/use_get_cases';

export const useGetCasesMockState: UseGetCasesState = {
  data: {
    countClosedCases: 0,
    countOpenCases: 5,
    cases: [
      {
        closedAt: null,
        closedBy: null,
        id: '3c4ddcc0-4e99-11ea-9290-35d05cb55c15',
        createdAt: '2020-02-13T19:44:23.627Z',
        createdBy: { username: 'elastic' },
        comments: [],
        description: 'Security banana Issue',
        externalService: null,
        status: 'open',
        tags: ['defacement'],
        title: 'Another horrible breach',
        totalComment: 0,
        updatedAt: null,
        updatedBy: null,
        version: 'WzQ3LDFd',
      },
      {
        closedAt: null,
        closedBy: null,
        id: '362a5c10-4e99-11ea-9290-35d05cb55c15',
        createdAt: '2020-02-13T19:44:13.328Z',
        createdBy: { username: 'elastic' },
        comments: [],
        description: 'Security banana Issue',
        externalService: null,
        status: 'open',
        tags: ['phishing'],
        title: 'Bad email',
        totalComment: 0,
        updatedAt: null,
        updatedBy: null,
        version: 'WzQ3LDFd',
      },
      {
        closedAt: null,
        closedBy: null,
        id: '34f8b9e0-4e99-11ea-9290-35d05cb55c15',
        createdAt: '2020-02-13T19:44:11.328Z',
        createdBy: { username: 'elastic' },
        comments: [],
        description: 'Security banana Issue',
        externalService: null,
        status: 'open',
        tags: ['phishing'],
        title: 'Bad email',
        totalComment: 0,
        updatedAt: null,
        updatedBy: null,
        version: 'WzQ3LDFd',
      },
      {
        closedAt: '2020-02-13T19:44:13.328Z',
        closedBy: { username: 'elastic' },
        id: '31890e90-4e99-11ea-9290-35d05cb55c15',
        createdAt: '2020-02-13T19:44:05.563Z',
        createdBy: { username: 'elastic' },
        comments: [],
        description: 'Security banana Issue',
        externalService: null,
        status: 'closed',
        tags: ['phishing'],
        title: 'Uh oh',
        totalComment: 0,
        updatedAt: null,
        updatedBy: null,
        version: 'WzQ3LDFd',
      },
      {
        closedAt: null,
        closedBy: null,
        id: '2f5b3210-4e99-11ea-9290-35d05cb55c15',
        createdAt: '2020-02-13T19:44:01.901Z',
        createdBy: { username: 'elastic' },
        comments: [],
        description: 'Security banana Issue',
        externalService: null,
        status: 'open',
        tags: ['phishing'],
        title: 'Uh oh',
        totalComment: 0,
        updatedAt: null,
        updatedBy: null,
        version: 'WzQ3LDFd',
      },
    ],
    page: 1,
    perPage: 5,
    total: 10,
  },
  loading: [],
  selectedCases: [],
  isError: false,
  queryParams: {
    page: 1,
    perPage: 5,
    sortField: SortFieldCase.createdAt,
    sortOrder: 'desc',
  },
  filterOptions: { search: '', reporters: [], tags: [], status: 'open' },
};

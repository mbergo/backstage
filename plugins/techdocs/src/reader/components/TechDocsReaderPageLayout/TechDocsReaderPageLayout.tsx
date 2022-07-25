/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropsWithChildren } from 'react';

import { Page } from '@backstage/core-components';

import { TechDocsReaderPageContent } from '../TechDocsReaderPageContent';
import { TechDocsReaderPageHeader } from '../TechDocsReaderPageHeader';
import { TechDocsReaderPageSubheader } from '../TechDocsReaderPageSubheader';

/**
 * Props for {@link TechDocsReaderPageLayout}
 * @public
 */
export type TechDocsReaderPageLayoutProps = PropsWithChildren<{
  /**
   * Show or hide the header, defaults to true.
   */
  withHeader?: boolean;
  /**
   * Show or hide the content search bar, defaults to true.
   */
  withSearch?: boolean;
}>;

/**
 * Default TechDocs reader page structure composed with a header and content
 * @public
 */
export const TechDocsReaderPageLayout = ({
  withSearch,
  withHeader = true,
  children,
}: TechDocsReaderPageLayoutProps) => {
  return (
    <Page themeId="documentation">
      {withHeader && <TechDocsReaderPageHeader />}
      <TechDocsReaderPageSubheader />
      <TechDocsReaderPageContent withSearch={withSearch}>
        {children}
      </TechDocsReaderPageContent>
    </Page>
  );
};

/**
 * @deprecated Import `TechDocsReaderPageLayout` instead
 *
 * @public
 */
export const TechDocsReaderLayout = TechDocsReaderPageLayout;

/**
 * @deprecated Import `TechDocsReaderPageLayoutProps` instead
 *
 * @public
 */
export type TechDocsReaderLayoutProps = TechDocsReaderPageLayoutProps;

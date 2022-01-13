import React from 'react';

import {DynamicPressable, DynamicText, DynamicView} from '../../components';
import {IssueState} from '../../__generated__/RepositoriesPaginationQuery.graphql';

interface IssuesFiltersProps {
  states: IssueState[];
  setStates: React.Dispatch<React.SetStateAction<IssueState[]>>;
  hasFinishedSuspending: boolean;
}

const IssuesFilters = ({
  states,
  setStates,
  hasFinishedSuspending,
}: IssuesFiltersProps) => (
  <DynamicView
    margin={16}
    alignItems="center"
    justifyContent="space-between"
    flexDirection="row">
    <DynamicText fontWeight="bold" color={'#fff'}>
      FILTER ISSUES:
    </DynamicText>
    <DynamicPressable
      borderColor={'#007BFF'}
      borderWidth={1}
      disabled={states.length === 2}
      backgroundColor={states.length === 2 ? '#007BFF' : undefined}
      paddingHorizontal={12}
      paddingVertical={8}
      borderRadius={4}
      onPress={() => {
        if (hasFinishedSuspending) setStates(['OPEN', 'CLOSED']);
      }}>
      <DynamicText fontWeight="bold" color={'#fff'}>
        ALL
      </DynamicText>
    </DynamicPressable>
    <DynamicPressable
      disabled={states.length === 1 && states.includes('OPEN')}
      backgroundColor={
        states.length === 1 && states.includes('OPEN') ? '#007BFF' : undefined
      }
      borderColor={'#007BFF'}
      borderWidth={1}
      paddingHorizontal={12}
      paddingVertical={8}
      borderRadius={4}
      onPress={() => {
        if (hasFinishedSuspending) setStates(['OPEN']);
      }}>
      <DynamicText fontWeight="bold" color={'#fff'}>
        OPEN
      </DynamicText>
    </DynamicPressable>
    <DynamicPressable
      borderColor={'#007BFF'}
      borderWidth={1}
      disabled={states.length === 1 && states.includes('CLOSED')}
      borderRadius={4}
      backgroundColor={
        states.length === 1 && states.includes('CLOSED') ? '#007BFF' : undefined
      }
      paddingHorizontal={12}
      paddingVertical={8}
      onPress={() => {
        if (hasFinishedSuspending) setStates(['CLOSED']);
      }}>
      <DynamicText fontWeight="bold" color={'#fff'}>
        CLOSE
      </DynamicText>
    </DynamicPressable>
  </DynamicView>
);

export default IssuesFilters;

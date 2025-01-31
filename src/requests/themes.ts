import gql from 'graphql-tag';

import { QueryHookOptions, MutationHookOptions } from '@apollo/react-hooks';
import { useLocalQuery, useLocalMutation, useLocalLazyQuery } from 'hooks/apollo';

import { Theme } from './types';

export const themesQuery = gql`
  query Themes($type: String, $search: String, $secteur: String, $page: Int, $perPage: Int) {
    themes(type: $type, search: $search, page: $page, perPage: $perPage, secteur: $secteur) {
      perPage
      page
      totalPages
      count
      data {
        id
        title
        description
        verified
        type
        resources {
          icon
          backgroundColor
        }
        activities {
          id
          title
          description
        }
        parentId
      }
    }
  }
`;

export interface ThemesArguments {
  type?: 'professional' | 'personal' | 'engagement' | 'secteur';
  search?: string;
  page?: number;
  perPage?: number;
}

export interface ThemesResponse {
  themes: {
    data: Theme[];
    perPage: number;
    page: number;
    totalPages: number;
    count: number;
  };
}

export const useThemes = (options: QueryHookOptions<ThemesResponse, ThemesArguments> = {}) =>
  useLocalQuery<ThemesResponse, ThemesArguments>(themesQuery, options);

export const themeQuery = gql`
  query Theme($id: ID!) {
    theme(id: $id) {
      id
      title
      type
      description
      verified
      resources {
        icon
        backgroundColor
      }
      activities {
        id
        title
        description
      }
      tooltips {
        competenceId
        tooltip
      }
    }
  }
`;

export interface ThemeResponse {
  theme: Theme;
}
export const useTheme = (options: QueryHookOptions<ThemeResponse, { id: string }> = {}) =>
  useLocalQuery(themeQuery, options);

export const useLazyTheme = (options: QueryHookOptions<ThemeResponse, { id: string }> = {}) =>
  useLocalLazyQuery(themeQuery, options);

export const secteurQuery = gql`
  query Themes($type: String) {
    themes(type: $type) {
      data {
        id
        title
        resources {
          icon
          backgroundColor
        }
        activities {
          id
          title
          description
        }
      }
    }
  }
`;

export interface SecteurArguments {
  type?: 'secteur';
}

export interface SectureResponse {
  themes: {
    data: any;
  };
}

export const useSecteurs = (options: QueryHookOptions<SectureResponse, SecteurArguments> = {}) =>
  useLocalLazyQuery<SectureResponse, SecteurArguments>(secteurQuery, options);

export const createThemeMutation = gql`
  mutation AddTheme(
    $title: String!
    $description: String!
    $type: String!
    $tooltips: [themeTooltipInputType]
    $required: [ID]
    $verified: Boolean!
    $activities: [String]
    $icon: Upload
    $parentId: ID
  ) {
    addTheme(
      title: $title
      description: $description
      type: $type
      tooltips: $tooltips
      required: $required
      verified: $verified
      activities: $activities
      icon: $icon
      parentId: $parentId
    ) {
      id
      title
      description
      verified
      type
      resources {
        icon
        backgroundColor
      }
      activities {
        id
        title
        description
      }
    }
  }
`;

interface AddThemeParams {
  title: string;
  description: string;
  type: string;
  tooltips?: { competenceId: string; tooltip: string }[];
  required?: string[];
  verified: boolean;
  activities?: string[];
  icon?: File;
  parentId?: string;
}

export const useAddTheme = (options?: MutationHookOptions<{ addTheme: Theme }, AddThemeParams>) =>
  useLocalMutation(createThemeMutation, options);

export const deleteThemeMutation = gql`
  mutation DeleteTheme($id: ID, $ids: [ID]) {
    deleteTheme(id: $id, ids: $ids)
  }
`;

export const useDeleteTheme = (
  options?: MutationHookOptions<{ deleteTheme: string }, { id?: string; ids?: string[] }>,
) => useLocalMutation(deleteThemeMutation, options);

export const updateThemeMutation = gql`
  mutation UpdateTheme(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $tooltips: [themeTooltipInputType]
    $required: [ID]
    $verified: Boolean
    $activities: [String]
    $icon: Upload
    $parentId: ID
  ) {
    updateTheme(
      id: $id
      title: $title
      description: $description
      type: $type
      tooltips: $tooltips
      required: $required
      verified: $verified
      activities: $activities
      icon: $icon
      parentId: $parentId
    ) {
      id
      title
      description
      verified
      type
      resources {
        icon
        backgroundColor
      }
      activities {
        id
        title
        description
      }
    }
  }
`;

interface UpdateThemeParams extends Partial<AddThemeParams> {
  id: string;
}

export const useUpdateTheme = (options?: MutationHookOptions<{ updateTheme: Theme }, UpdateThemeParams>) =>
  useLocalMutation(updateThemeMutation, options);

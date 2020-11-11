import gql from 'graphql-tag';
import { QueryHookOptions } from '@apollo/react-hooks';
import { useLocalLazyQuery } from 'hooks/apollo';

export const verificationMutation = gql`
  query VerificationBot($humanKey: String) {
    verificationBot(humanKey: $humanKey) {
      success
      challenge_ts
      hostname

    }
  }
`;
export interface VerificationArguments {
  humanKey: string;
}
export interface VerificationResponse {
  verificationBot: {
    success: boolean;
    challenge_ts: string;
    hostname: string;
  };
}

export const useVerification = (options: QueryHookOptions<VerificationResponse, VerificationArguments> = {}) =>
  useLocalLazyQuery<VerificationResponse, VerificationArguments>(verificationMutation, options);

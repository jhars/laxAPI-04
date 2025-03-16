export default `#graphql
  type Query {
    leagues: [League!],
    teams(leagueId: Int): [League!]
  }
`;

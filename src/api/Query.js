/**
 * Create a query for searching users on GitHub.
 *
 * @param query          The search term for finding the users.
 * @param numOfResults   The number of results to return at a time in one page.
 * @param nextPageCursor The cursor pointing to the item after which the set of results should start.
 */
export function searchUser () {
    return `query search($query: String!, $type: SearchType!, $numOfResults: Int!, $nextPageCursor: String) {
      search(type: $type, query: $query, first: $numOfResults, after: $nextPageCursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on User {
          login
          name
          location
          bio
          url
          avatarUrl
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(first: 5) {
            nodes {
              name
              url
              languages(first: 3) {
                nodes {
                  name
                }
              }
            }
            totalCount
          }
        }
      }
    }
  }`
}

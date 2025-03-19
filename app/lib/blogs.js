import graphqlRequest from "@/lib/graphqlRequest"

export async function getAllBlogPosts() {
  const query = {
    query: `query NewQuery {
            posts {
              nodes {
                title
                content
                slug
                date
                excerpt(format: RENDERED)
                
                featuredImage {
        node {
          mediaDetails {
            file
            sizes {
              height
              sourceUrl
              width
            }
          }
          author {
            node {
              name
              avatar {
                url
                size
                width
              }
              roles {
                nodes {
                  name
                }
              }
            }
          }
        }
      }

                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`
  };


  const resJson = await graphqlRequest(query)
  const allBlogPosts = resJson.data.posts;
  return allBlogPosts
}


export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short', // "Dec"
    day: '2-digit', // "16"
  }).format(new Date(dateString));
};


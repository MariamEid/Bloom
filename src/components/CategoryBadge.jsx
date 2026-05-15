import styled from "styled-components";

// styled.h2 creates an h2 element with these styles permanently attached
// styles here only affect this component, nothing else on the page
const Badge = styled.h2`
  display: inline-block;
  background: #9c4f91;
  color: white;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 999px;
  width: fit-content;
  margin: 0;
`;

// "category" is a prop passed from ProductDetails like: <CategoryBadge category={product.category} />
// whatever category value is passed in gets displayed inside the badge
function CategoryBadge({ category }) {
  return <Badge>{category}</Badge>;
}

export default CategoryBadge;
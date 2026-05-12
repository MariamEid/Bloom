import styled from "styled-components";

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

function CategoryBadge({ category }) {
  return <Badge>{category}</Badge>;
}

export default CategoryBadge;
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// styled.button creates a regular button with these styles permanently attached
// &:hover is how hover states are written inside styled-components
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #555;
  padding: 6px 12px;
  margin-bottom: 28px;
  border-radius: 8px;
  align-self: flex-start;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(156, 79, 145, 0.12);
    color: #9c4f91;
  }
`;

function BackButton() {
  const navigate = useNavigate();
    // navigate(-1) means go back one page — same as browser back button
  return <StyledButton onClick={() => navigate(-1)}>← Back</StyledButton>;
}

export default BackButton;
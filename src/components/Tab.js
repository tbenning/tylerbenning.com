import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

const StyledTab = styled.li`
  margin-right: 8px;
  margin-bottom: -2px;
  z-index: 100;
`
const StyledButtonTwo = styled.button`
    border: none;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;

    font-weight: 600;
    background: none;
    color: ${colors.ink80};
    border: 2px solid ${colors.ink20};
    padding: 12px 20px;
    transition: ease-in-out 0.2s;
    z-index: 100;

    &:hover {
        background: ${colors.ink20};
    }
    &.active, .active:hover {
        color: ${colors.teal90};
        border-top: 2px solid ${colors.teal90};
        border-bottom: 2px solid #fff;
        background: #fff;

    }
    &:focus {
        outline: none;
    }
`
const FakeBorderTop = styled.div`
    width: 100%;
    height: 3px;
    background: #fff;
    transition: ease-in-out 0.2s;
    &.active {
      background: ${colors.teal90};
    }
`

class Tab extends Component {
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }

    render() {
        const {
          onClick,
          props: {
            activeTab,
            label,
          },
        } = this;

        return (
          <StyledTab>
            <FakeBorderTop className={activeTab === label && 'active'} /> 
            <StyledButtonTwo onClick={onClick} className={activeTab === label && 'active'}>{label}</StyledButtonTwo>
          </StyledTab>
        )
      }
    }
    
    export default Tab;
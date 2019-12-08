import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import { StyledReader, StyledControls } from '../Components.styled';

const query = queryString =>
  Number.parseInt(new URLSearchParams(queryString).get('item'), 10);

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    location: PropTypes.shape().isRequired,
    history: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;

    const index = query(location.search);

    if (!index || index < 0) {
      history.replace({
        ...location.pathname,
        search: 'item=1',
      });
    }
  }

  clickNext = () => {
    const { location, history } = this.props;

    const index = query(location.search);

    history.push({
      ...location.pathname,
      search: `item=${index + 1}`,
    });
  };

  clickPrev = () => {
    const { location, history } = this.props;

    const index = query(location.search);

    history.push({
      ...location.pathname,
      search: `item=${index - 1}`,
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { items, location } = this.props;
    let index = query(location.search);

    if (!index || index < 1) {
      index = 1;
    }
    if (index > items.length) {
      index = items.length;
    }
    const NextBtnDisabled = index === items.length;
    const PrevBtnDisabled = index === 1;
    return (
      <StyledReader>
        <StyledControls>
          <Controls
            clickBtn={this.clickPrev}
            name="Prev"
            disable={PrevBtnDisabled}
          />
          <Controls
            clickBtn={this.clickNext}
            name="Next"
            disable={NextBtnDisabled}
          />
        </StyledControls>
        <Counter current={index} total={items.length} />
        <Publication index={index} item={items[index - 1]} />
      </StyledReader>
    );
  }
}

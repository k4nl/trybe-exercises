import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props;
    return (
      <section className="pokemon">
        <h1>
          { name }
          { image }
        </h1>
        <p>
          { type }
        </p><p>
          { `Average weight: ${value} ${measurementUnit}` }
        </p>
      </section>
    )
  }
}

export default Pokedex
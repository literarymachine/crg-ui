import React from 'react';
import pointer from 'json-pointer';
import _ from 'lodash';
import Link from './Link'
import Label from './Label'

import '../styles/ResourceTable.pcss'

class ResourceTable extends React.Component {

  constructor(props) {
    super(props);
    this.process = this.process.bind(this);
    this.property = this.property.bind(this);
    this.getSchema = this.getSchema.bind(this);
  }

  process(schema, value) {
    return (
      <table className="ResourceTable">
        <tbody>
          {Object.keys(schema.properties).map(property => {
            if (value[property]) {
              return (
                <tr key={property}>
                  <td>{property}</td>
                  <td>{this.property(property, schema.properties[property], value[property])}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    )
  }

  property(name, definition, value) {

    if ('$ref' in definition) {
      _.merge(definition, this.getSchema(definition['$ref']));
    }

    if ('allOf' in definition) {
      var allOf = {};
      definition.allOf.map(function(definition) {
        if ('$ref' in definition) {
          _.merge(allOf, this.getSchema(definition['$ref']));
        } else {
          _.merge(allOf, definition);
        }
      }, this);
      definition = allOf;
    }

    let label = false
    if (definition.remote) {
      definition.type = 'string'
      definition.format = 'uri'
      label = <Label item={value} />
      value = value['@id']
    }

    if (!definition.type && definition.enum) {
      definition.type = 'string';
    }

    switch(definition.type) {
      case 'array':
        const itemsDefinition = definition.items['$ref']
          ? this.getSchema(definition.items['$ref'])
          : definition.items
        console.log(name, value)
        return (
          <ul>
            {value.map((value, index) => {
              return <li key={index}>{this.property(name, itemsDefinition, value)}</li>
            })}
          </ul>
        );
      case 'string':
      case 'number':
      case 'integer':
      case 'boolean':
        return <span>
          {definition.format === 'uri' ? <Link to={value}> {label ? label : value}</Link> : value}
        </span>
      case 'object':
        return this.process(definition, value)
      default:
        console.warn("Unkown property type", name, definition);
    }

  }

  getSchema(ptr) {
    return ptr.charAt(0) == '#'
      ? pointer.get(this.props.schema, ptr.slice(1))
      : { "type" : "string", "remote": ptr };
  }

  render() {
    const type = this.props.value['@type'];
    const schema = this.getSchema('#/definitions/' + type);
    return this.process(schema, this.props.value)
  }

}

export default ResourceTable;

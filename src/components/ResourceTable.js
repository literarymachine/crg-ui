import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import formatURL from '../common'

import '../styles/ResourceTable.pcss'

const Location = ({location}) => (
  
  <div>
    {location.name &&
      <div>{location.name}</div>
    }
    
    {location.address &&
      <div>
        {location.address.streetAddress &&
          <div>{location.address.streetAddress}</div>
        }

        {location.address.postalCode &&
          <div>{location.address.postalCode} {location.address.addressLocality}</div>
        }
        {location.address.addressCountry &&
          <div>{location.address.addressCountry}</div>
        }
      </div>
    }

    {location.openingHoursSpecification &&
      <div>       
        {location.openingHoursSpecification.comment &&
          <div>{location.openingHoursSpecification.comment}</div>
        }
        {location.openingHoursSpecification.description &&
          <div>{location.openingHoursSpecification.description}</div>
        }
      </div>
    }

  </div>
)

const ResourceTable = ({ data }) => (
  <table className="ResourceTable">
    <tbody>

      {data.gender &&
      <tr>
        <td>Gender</td>
        <td>{data.gender}</td>
      </tr>
      }

      {data.sortName &&
      <tr>
        <td>Short Name</td>
        <td>{data.sortName}</td>
      </tr>
      }

      {data.familyName &&
      <tr>
        <td>Familly Name</td>
        <td>{data.familyName}</td>
      </tr>
      }

      {data.givenName &&
      <tr>
        <td>Given Name</td>
        <td>{data.givenName}</td>
      </tr>
      }

      {data.honoricPrefix &&
      <tr>
        <td>Honoric Prefix</td>
        <td>{data.honoricPrefix}</td>
      </tr>
      }

      {data.jobTitle &&
      <tr>
        <td>Job Tittle</td>
        <td>{data.jobTitle}</td>
      </tr>
      }

      {data.alternateName &&
      <tr>
        <td>Alternate Name</td>
        <td>{data.alternateName}</td>
      </tr>
      }

      {data.faxNumber &&
      <tr>
        <td>Fax Number</td>
        <td>{data.faxNumber}</td>
      </tr>
      }

      {data.telephone &&
      <tr>
        <td>Telephone</td>
        <td><a href={`tel:${data.telephone}`}>{data.telephone}</a></td>
      </tr>
      }

      {data.email &&
      <tr>
        <td>E-Mail</td>
        <td><a href={`mailto:${data.email}`}>{data.email}</a></td>
      </tr>
      }

      {/* {data.comment &&
      <tr>
        <td>Comment</td>
        <td>{data.comment}</td>
      </tr>
      } */}
      
      {data.dbsID &&
      <tr>
        <td>dbsID</td>
        <td>{data.dbsID}</td>
      </tr>
      }

      {data.rs &&
      <tr>
        <td>RS</td>
        <td>{data.rs}</td>
      </tr>
      }

      {data.isil &&
      <tr>
        <td>isil</td>
        <td>{data.isil}</td>
      </tr>
      }

      {data.startDate &&
      <tr>
        <td>Start Date</td>
        <td>{data.startDate}</td>
      </tr>
      }

      {data.endDate &&
      <tr>
        <td>End Date</td>
        <td>{data.endDate}</td>
      </tr>
      }

      {data.sameAs &&
        <tr>
          <td>External Links</td>
          <td>
            {data.sameAs.map(url => (
              <div key={url}><a target="_blank" href={url}><i className="fa fa-fw fa-external-link-square" /> {formatURL(url)}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.parentOrganization &&
        <tr>
          <td>Parent Organization</td>
          <td>  
            <a href={`/resource/${data.parentOrganization['@id']}`}><Icon type={data.parentOrganization['@type']} /> {data.parentOrganization.name}</a>
          </td>
        </tr>
      }

      {data.provides &&
        <tr>
          <td>Provides</td>
          <td>  
            <a target="_blank" href={data.provides}><i className="fa fa-fw fa-external-link-square" /> {formatURL(data.provides)}</a>
          </td>
        </tr>
      }

      {data.worksFor &&
        <tr>
          <td>Works for</td>
          <td>
            {data.worksFor.map(work => (
              <div key={work['@id']} ><a href={`/resource/${work['@id']}`}><Icon type={work['@type']} /> {work.name}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.product &&
        <tr>
          <td>Product</td>
          <td>
            {data.product.map(product => (
              <div key={product['@id']} ><a href={`/resource/${product['@id']}`}><Icon type={product['@type']} /> {product.name}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.businessPartner &&
        <tr>
          <td>Business Partner</td>
          <td>
            {data.businessPartner.map(partner => (
              <div key={partner['@id']} ><a href={`/resource/${partner['@id']}`}><Icon type={partner['@type']} /> {partner.name}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.customerPoint &&
        <tr>
          <td>Contact Point</td>
          <td>
            {data.contactPoint.map(contact => (
              <div key={contact['@id']} ><a href={`/resource/${contact['@id']}`}><Icon type={contact['@type']} /> {contact.name}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.customer &&
        <tr>
          <td>Customer</td>
          <td>
            {data.customer.map(customer => (
              <div key={customer['@id']} ><a href={`/resource/${customer['@id']}`}><Icon type={customer['@type']} /> {customer.name}</a></div>
            ))
            }
          </td>
        </tr>
      }

      {data.location &&
        <tr>
          <td>Location</td>
          <td>
            <Location location={data.location} />
          </td>
        </tr>
      }

      {data.image &&
        <img src={data.image} alt={data.image} />
      }
      
    </tbody>
  </table>
)

Location.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
}

ResourceTable.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ResourceTable
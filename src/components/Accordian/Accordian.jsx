// Todo: Single Selection
// Todo: Multiple Selection

import React, { useState } from 'react'
import data from './data';

const Accordian = () => {

    const [selected, setSelected] = useState(null);

  return (
      <div className="wrapper">Accordian

          <div className="accordion">
              {
                //   edgecase incase we were accessing an API w/ no data, or the call is bad
                  data && data.length > 0 ? 
                  <div className="">Data here</div>
                      : <div className="">No Data Found</div>
            }
          </div>

      </div>
  )
}

export default Accordian
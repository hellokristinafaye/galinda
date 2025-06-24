// Todo: Single Selection - Done!
// Todo: Multiple Selection

import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  // for multiple selections:
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  // to store the multiple id's
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    // include a condition here such that if the item is selected, when clicked it'll collapse.

    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        // console.log(findIndexOfCurrentId);
        
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId)
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)

        }
        setMultiple(cpyMultiple);
        
    }
    console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button
        //   this onClick basically toggles between the settings
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className=""
      >
        Enable multiple selections
      </button>

      <div className="accordion">
        {
          //   edgecase incase we were accessing an API w/ no data, or the call is bad
          data && data.length > 0 ? (
            data.map((dataItem) => (
              // eslint-disable-next-line react/jsx-key
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3 className="">{dataItem.question}</h3>
                  <span className="">+</span>
                </div>

                {/* this is the condition that displays or not based on whether or not the item is clicked */}
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="">No Data Found</div>
          )
        }
      </div>
    </div>
  );
};

export default Accordian;

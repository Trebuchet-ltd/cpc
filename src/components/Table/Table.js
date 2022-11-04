import React from "react";
import "./Table.css";

const Table = ({head, content, customStyle}) => {

    let bodyContent = content.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                {row.map((item, j) => {
                    return <td key={j}>{item}</td>
                })}
            </tr>
        )
    });

    return (
        <>
            <table className={"content-table " + customStyle}>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        {
                            head.map((name, index) => (
                                <React.Fragment key={index}>
                                    <th>{name}</th>
                                </React.Fragment>
                                
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {bodyContent}
                </tbody>
            </table>
        </>
    );
}

export default Table;
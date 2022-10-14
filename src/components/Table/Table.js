import "./Table.css";

const Table = ({head, content, customStyle}) => {
    let body = [], arr2 = [];

    for(let i=0; i<content.length; i++)
    {
        arr2.splice(0, arr2.length);
        for(let j=0; j<content[0].length; j++)
        {
            arr2.push(<td>{content[i][j]}</td>);
        }
        body.push(<tr><td>{i+1}</td>{arr2.map(item => item)}</tr>);
    }

    return (
        <>
            <table className={"content-table " + customStyle}>
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        {
                            head.map((name) => (
                                <th key={name}>{name}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </>
    );
}

export default Table;
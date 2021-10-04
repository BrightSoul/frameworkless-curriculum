export default /* html */`
    <style>
        [data-container] {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            margin-left: -1mm;
            margin-right: -1mm;
        }
    </style>
    <div data-container><slot></slot></div>
`;

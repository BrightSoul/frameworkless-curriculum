export default /* html */`
    <style>
        [data-container] {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
        }
    </style>
    <div data-container><slot></slot></div>
`;

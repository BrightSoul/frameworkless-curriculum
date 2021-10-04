export default /* html */`
    <style>
        :host {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            padding-top: 3mm;
            padding-bottom: 3mm;
            margin-bottom: 6mm;
            display: flex !important;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    </style>
    <slot></slot>
`;

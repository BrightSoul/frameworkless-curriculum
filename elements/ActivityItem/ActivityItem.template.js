export default /* html */`
    <style>
        [data-container] {
            display: block;
            display: flex;
            flex-direction: row;
            margin-bottom: 2mm;
            justify-content: space-between;
        }
        [data-description-container] {
            display: flex;
            flex-direction: row;
        }
        [data-description] {
            margin-top: 0.5mm;
        }
        [data-image] {
            height: 8mm;
            margin-right: 3mm;
            vertical-align: middle;
        }
        [data-period-container] {
            white-space: nowrap;
            margin-left: 3mm;
        }
        [data-period] {
            font-size: 0.9em;
        }
        .fa-calendar-alt {
            font-size: 0.9em;
        }
    </style>
    <div data-container>
        <div data-description-container><img data-image><div data-description><slot></slot></div></div>
        <div data-period-container><i class="far fa-calendar-alt"></i> <time data-period></time></div>
    </div>
`;

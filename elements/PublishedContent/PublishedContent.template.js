export default /* html */`
    <style>
        :host {
            display: table;
            width: 50%;
        }
        img {
            width: 17.7mm;
            height: 26mm;
            object-fit: cover;
            object-position: center center;
            float: left;
            margin-right: 3mm;
            margin-left: 0.4mm;
        }
        [data-rating] {
            color: orange;
        }
        a {
            color: black;
        }
        h4 {
            margin: 0;
            white-space: nowrap;
            line-height: 5mm;
        }

        [data-rating-container] {
            margin-top: 1mm;
            margin-bottom: 3.6mm;
        }
        
        [data-period], .fa-calendar-alt {
            font-size: 0.9em;
        }
    </style>
    <div data-container>
        <a data-link><img data-image><h4 data-title></h4></a>
        <div data-publisher></div>
        <div data-rating-container><span data-rating></span> (<span data-rating-value></span>)</div>
        <div><i class="far fa-calendar-alt"></i> <time data-period></time></div>
    </div>
`;

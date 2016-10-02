/*
 * This file is part of the nivo project.
 *
 * (c) Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict';

import d3 from 'd3';

const scalePropToD3Scale = ({ type, domain, range }) => {
    return d3.scale[type]()
        .domain(domain)
        .range(range)
    ;
};

export default scalePropToD3Scale;
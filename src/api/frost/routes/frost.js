'use strict';

/**
 * frost router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::frost.frost');

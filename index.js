'use strict';

exports.isActually = ( isNotActually ) => {
    return Boolean( isNotActually == undefined || isNotActually == '' || isNotActually == null );
};

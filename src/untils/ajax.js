/**
 * Created by virus_zhh on 2017/9/3.
 */
import $ from 'jquery'

export const baseURL = '/api/'

const requestHeader = function (request) {
  request.setRequestHeader('Token', '')
  request.setRequestHeader('SessionID', '')
}

export const get = (url) => {
  return $.ajax({
    url: baseURL + url,
    dataType: 'json',
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    beforeSend: function (request) {
      requestHeader(request)
    },
    complete: function () {

    },
    error: function () {
    }
  })
}

export const post = function (url, data) {
  return $.ajax({
    url: baseURL + url,
    dataType: 'json',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data),
    beforeSend: function (request) {
      requestHeader(request)
    },
    complete: function () {
    },
    error: function () {
    }
  })
}

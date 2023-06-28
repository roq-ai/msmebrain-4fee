import axios from 'axios';
import queryString from 'query-string';
import { OperationsInterface, OperationsGetQueryInterface } from 'interfaces/operations';
import { GetQueryInterface } from '../../interfaces';

export const getOperations = async (query?: OperationsGetQueryInterface) => {
  const response = await axios.get(`/api/operations${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createOperations = async (operations: OperationsInterface) => {
  const response = await axios.post('/api/operations', operations);
  return response.data;
};

export const updateOperationsById = async (id: string, operations: OperationsInterface) => {
  const response = await axios.put(`/api/operations/${id}`, operations);
  return response.data;
};

export const getOperationsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/operations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteOperationsById = async (id: string) => {
  const response = await axios.delete(`/api/operations/${id}`);
  return response.data;
};

import axios from 'axios';
import queryString from 'query-string';
import { FinancialInterface, FinancialGetQueryInterface } from 'interfaces/financial';
import { GetQueryInterface } from '../../interfaces';

export const getFinancials = async (query?: FinancialGetQueryInterface) => {
  const response = await axios.get(`/api/financials${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFinancial = async (financial: FinancialInterface) => {
  const response = await axios.post('/api/financials', financial);
  return response.data;
};

export const updateFinancialById = async (id: string, financial: FinancialInterface) => {
  const response = await axios.put(`/api/financials/${id}`, financial);
  return response.data;
};

export const getFinancialById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/financials/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFinancialById = async (id: string) => {
  const response = await axios.delete(`/api/financials/${id}`);
  return response.data;
};

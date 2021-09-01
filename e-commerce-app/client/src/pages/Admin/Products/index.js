import { useMemo } from 'react';

import { useQuery, useMutation, useQueryClient } from 'react-query';

import { Table, Popconfirm } from 'antd';
import { fetchProductList, deleteProduct } from '../../../api';
import { Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

function Products() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    'admin:products',
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries('admin:products'),
  });

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <>
            <Link to={`/admin/products/${record._id}`}>Edit</Link>
            <Popconfirm
              title='Are you sure?'
              onConfirm={() =>
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log('success');
                  },
                })
              }
              onCancel={() => console.log('iptal edildi')}
              okText='yes'
              cancelText='no'
              placement='left'
            >
              <a href='/#' style={{ marginLeft: 10 }}>
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error : {error.message}</div>;

  return (
    <div>
      <Text fontSize='2xl' p='5'>
        Products
      </Text>
      <Table dataSource={data} columns={columns} rowKey='_id'></Table>
    </div>
  );
}

export default Products;

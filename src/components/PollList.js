import React, { useState, useEffect } from 'react';
import { List, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const PollList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
    loadMoreData();
  }, []);

  return (      
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
                createdBy={item.createdBy}
              />
              <div>View</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default PollList
import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
            <h2>Hi this is blog</h2>
            {children}
        </div>
    );
};

export default BlogLayout;
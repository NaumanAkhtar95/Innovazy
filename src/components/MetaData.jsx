import React from 'react';

const MetaData = ({ title, description, keywords }) => {
    return (
        <>
            <meta property='og:type' content='website' />
            {/* <meta property='og:url' content="https://parmafamilydentalcenter.com/" /> */}
            <meta name='viewport' content='width=device-width, viewport-fit=cover' />
            <meta name='robots' content='follow' />
            <meta name="googlebot" content="index,follow" />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='msapplication-TileImage' content='../../static/favicon.ico' />

            {/* an HTML tag that allows you to specify a color for the browser toolbar and the status bar on mobile devices */}
            <meta name='theme-color' content='#ffffff' />
            <meta name="author" content="Innovazy" />

            <meta property='og:locale' content='en_US' />

            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

            {/* determine how URLs are displayed when shared on social media sites */}
            <meta property='og:image' content='../../static/favicon.ico' />
            <meta property='og:image:width' content='600' />
            <meta property='og:image:height' content='300' />

            {title && (
                <>
                    <title>{title}</title>
                    <meta property='og:title' content={title} />
                    <meta property='title' content={title} />
                    <meta name='twitter:title' content={title} />
                </>
            )}
            {description && (
                <>
                    <meta name='description' content={description} />
                    <meta property='og:description' content={description} />
                    <meta name='twitter:description' content={description} />
                </>
            )}
            {keywords && (
                <>
                    <meta name='keywords' content={keywords} />
                </>
            )}
        </>
    );
};

export default MetaData;
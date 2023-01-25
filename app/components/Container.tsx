import React from 'react';
import { ViewProps } from 'react-native';
import { Layout } from '@ui-kitten/components';

export const Container = ({ children }: ViewProps) => (
    <Layout style={{ flex: 1 }}>
        {children}
    </Layout>
);

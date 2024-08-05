import Layout from "../../components/Layout";


export default function MyApp({ children }) {
  return (
    
      <Layout>
        <html>
        <body>{children}</body>
      </html>
      </Layout>
    
  );
};
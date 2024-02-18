import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    // Ejecuta la lógica de renderizado de React de forma sincrónica
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        // Útil para envolver todo el árbol de React
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        // Útil para empaquetar por página
        enhanceComponent: (Component) => Component,
      });
      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      // Ejecuta el padre `getInitialProps`, ahora incluye el `renderPage` personalizado
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

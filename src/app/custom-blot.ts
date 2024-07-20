import { Parchment } from 'quill';

class CustomBlot extends Parchment.InlineBlot {
  static override create(url: unknown) {
    let node: any = super.create(url);
    node.setAttribute('href', url);
    node.setAttribute('target', '_blank');
    node.setAttribute('title', node.textContent);
    return node;
  }

  static override formats(domNode: HTMLElement) {
    return domNode.getAttribute('href') || true;
  }

  override format(name: string, value: string) {
    if (name === 'custom' && value) {
      this.domNode.setAttribute('href', value);
    } else {
      super.format(name, value);
    }
  }

  override formats() {
    let formats = super.formats();
    formats['custom'] = CustomBlot.formats(this.domNode);
    return formats;
  }
}
CustomBlot.blotName = 'custom';
CustomBlot.tagName = 'A';

export { CustomBlot };
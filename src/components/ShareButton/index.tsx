
import { WhatsappIcon, WhatsappShareButton } from 'react-share';

const ShareButton = ({ url, title }: { url: string; title: string }) => {
    return (
    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  );
};

export default ShareButton;
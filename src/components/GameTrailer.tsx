import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0]; // 有多部

  return first ? (
    // poster: 视频加载过程中显示的封面图像, controls: 显示视频播放的控件
    <video src={first.data["480"]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;


podcast_show_scope = angular.element($(podcast_show)).scope()
angular.extend(
    podcast_show_scope,
    {
      get_all_unplayed: function() {
        uncompleted_episodes = podcast_show_scope.episodes.filter(
          function isNotCompleted(episode) {
            return !podcast_show_scope.isEpisodePlayed(episode);
          }
        );
        return uncompleted_episodes;
      },
      play_next_unplayed: function() {
        episode_to_play = podcast_show_scope.get_all_unplayed()[0];
        podcast_show_scope.playPause(episode_to_play, podcast_show_scope);
      },
    }
  )

function attach_play_all() {
  audio = jQuery('audio')[0];
  listener = audio.addEventListener('ended', podcast_show_scope.play_next_unplayed);
  podcast_show_scope.play_next_unplayed();
  el = $(play_all);
  function remover() {
    audio.removeEventListener('ended', podcast_show_scope.play_next_unplayed);
    el.onclick = attach_play_all;
  }
  el.onclick = remover;
  return listener;
}

$(podcast_header).append("<div id='play_all' class='episode_button' onclick='attach_play_all()'><img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIyOXB4IiBoZWlnaHQ9IjI5cHgiIHZpZXdCb3g9IjAgMCAyOSAyOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNC4wMDAwMDAsIC0yMTQuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTQuMDAwMDAwLCAyMTQuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5LDE0LjUgQzI5LDYuNDkxODcxMTMgMjIuNTA4MTI4OSwwIDE0LjUsMCBDNi40OTE4NzExMywwIDAsNi40OTE4NzExMyAwLDE0LjUgQzAsMjIuNTA4MTI4OSA2LjQ5MTg3MTEzLDI5IDE0LjUsMjkgQzIyLjUwODEyODksMjkgMjksMjIuNTA4MTI4OSAyOSwxNC41IFoiIGlkPSJPdmFsLTIiIGZpbGw9IiNGNDQzMzYiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEsMjEuNSBMMTEsNyBMMjEuODc1LDE0LjI1IEwxMSwyMS41IFoiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=='></img></div>")



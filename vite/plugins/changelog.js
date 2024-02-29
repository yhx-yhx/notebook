// import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { PageProperties, PagePropertiesMarkdownSection } from '@nolebase/vitepress-plugin-page-properties/vite'

// 自动导入 Element-plus
export default function cretateChangelog() {
    return [
    //     GitChangelog({
    //   maxGitLogCount: 2000,
    //   repoURL: () => 'https://github.com/yhx-yhx/notebook',
    //   rewritePaths: {
    //     'docs/': '',
    //   },
    // }),
    // GitChangelogMarkdownSection({
    //   getChangelogTitle: (_, __, { helpers }) => {
    //     if (helpers.idStartsWith(join('pages', 'en')))
    //       return 'File History'
    //     if (helpers.idStartsWith(join('pages', 'zh-CN')))
    //       return '文件历史'

    //     return 'File History'
    //   },
    //   getContributorsTitle: (_, __, { helpers }) => {
    //     if (helpers.idStartsWith(join('pages', 'en')))
    //       return 'Contributors'
    //     if (helpers.idStartsWith(join('pages', 'zh-CN')))
    //       return '贡献者'

    //     return 'Contributors'
    //   },
    //   excludes: [],
    //   exclude: (_, { helpers }) => {
    //     if (helpers.idEquals(join('pages', 'en', 'index.md')))
    //       return true
    //     if (helpers.idEquals(join('pages', 'zh-CN', 'index.md')))
    //       return true

    //     return false
    //   },
    // }),
    PageProperties(),
    PagePropertiesMarkdownSection({
      excludes: [],
      exclude: (_, { helpers }) => {
        if (helpers.idEquals(join('pages', 'en', 'index.md')))
          return true
        if (helpers.idEquals(join('pages', 'zh-CN', 'index.md')))
          return true

        return false
      },
    })
  ]
}

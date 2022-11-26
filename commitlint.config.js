module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build', // 构建执行
                'chore',
                'ci', // CI 相关
                'docs', // 文档更新
                'feat', // 新功能
                'fix', // bug 修复
                'perf', // 性能优化
                'refactor', // 功能重构
                'revert', // 回滚操作
                'style', // 样式相关
                'release', // 发版相关
                'lint', // lint规则
                'doc', // 文档相关
                'wip',
            ],
        ],
    },
}

import './TWCom.css'

/**
 * class 값들을 나열해가면서 디자인을 즉각적으로 적용 하는 방식
 * 중요한것은 샘플 확인, class 요소 사전 확인
 */
export default function TWCom () {
    return (
        <>

            <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <div class='text-lg font-medium text-red-500'>
                    <p class="text-red-600/50">tailwind css1</p>
                </div>
                <div class="pt-6 text-center space-y-4">
                    <blockquote>
                    <p class="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                    </blockquote>
                    <figcaption class="font-medium">
                    <div class="text-sky-500 dark:text-sky-400">
                        Sarah Dayan
                    </div>
                    <div class="text-slate-700 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                    </figcaption>
                </div>
            </figure>
        </>
    );
}
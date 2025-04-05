import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FEATURES_LIST } from '../../constants';
import { FeatureItem } from './FeatureItem';

export const FeaturesSection: React.FC = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Séparateur Dégradé */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 dark:text-white"
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          Why Choose RippleTip?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {FEATURES_LIST.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};